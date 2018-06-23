---
id: 5
layout: post
title: 'Null Object design pattern'
description: "An object with no value or defined behavior can be helpful when no other \"real\" object is present so it can mimic its usage. It may help you to avoid unnecessary conditionals and make your code more readable."
sources:
    -
        - "https://www.youtube.com/watch?v=5DVDewOReoY"
        - Chasing "Perfect" presentation
    -
        - "https://adamwathan.me/2015/09/03/pushing-polymorphism-to-the-database/"
        - Pushing Polymorphism to the Database screencast
    -
        - "https://sourcemaking.com/design_patterns/null_object"
        - Null Object Design Pattern on sourcemaking.com
    -
        - "https://en.wikipedia.org/wiki/Null_Object_pattern"
        - Null Object Design Pattern on wikipedia.com
---

Recently I saw a presentation called [Chasing "Perfect"]({$sources[0][0]}) given by [Adam Wathan](https://twitter.com/adamwathan) at Laracon EU in 2015. In case you don't know him I strongly recommend you to follow him on Twitter, at least. I definitely did so.

Consider this article as my notes or thoughts on presented topic so I won't forget this whole thing in the future.

## The idea

In the presentation, Adam illustrated how to structure application code when new requirements keep come around. In his example, a book ordering system can use coupons to give a discount for a customer.

I will use exact same code to present the initial conditions (quite simplified, of course):

```php
class Order
{
    private $books;

    private $coupon;

    public __construct($books)
    {
        $this->books = $books;
    }

    public function applyCoupon($coupon)
    {
        $this->coupon = $coupon;
    }

    public function total()
    {
        $discount = 0;

        if (isset($this->coupon)) {
            $discount = $this->coupon->value;
        }

        return $this->books->sum('price') - $discount;
    }
}
```

So the `Order::total()` method calculates the total value of ordered books and in a case a coupon is applied, it subtracts total by the value of a coupon. Pretty straightforward.

Now, let's imagine a new requirement from your boss: _"we need to implement a new coupon that is percentage based"_. You say _"no problem"_ and enhance the code in `total()` method (or maybe not, but it might be tempting to make such an easy change):

```php
public function total()
{
    $discount = 0;

    if (isset($this->coupon)) {
        if ($this->coupon->isPercentage()) {
            $discount = $this->books->sum('price') * ($this->coupon->value / 100);
        } else {
            $discount = $this->coupon->value;
        }
    }

    return $this->books->sum('price') - $discount;
}
```

There is no null object yet, but we are getting to the point. We can see a lot of conditions which are not very popular (yes, because **nested conditions are ugly**). The problem in this example can only grow when new requirements come, not even `switch` statement can help us solve this problem nicely.

The best we can do is to **extract discount logic somewhere else** and in that way introduce Coupon classes - one class for every type of a coupon. And after several rounds of refactoring here is the result:

```php
class ValueCoupon
{
    public function discount($order)
    {
        return $this->value;
    }
}

class PercentageCoupon
{
    public function discount($order)
    {
        return $order->grossTotal() * ($this->value / 100);
    }
}
```

`Order::class` has also changed a bit:

```php
class Order
{
    // ...

    public function grossTotal($order)
    {
        return $this->books->sum('price');
    }

    public function total()
    {
        return $this->grossTotal() - $this->discount();
    }

    private function discount()
    {
        if (isset($this->coupon)) {
            return $this->coupon->discount($this);
        }

        return 0;
    }
}
```

So, what has changed exactly?

- new Coupon classes have only one `discount()` method that consists of only one line of code
- added `Order::grossTotal()` to get value of the books
- almost all methods in `Order::class` are really simple, except `Order::discount()`

<div class="tip" markdown="1">
Maybe it would be better to implement also an interface `ICoupon`, but this is another story.
</div>

## The solution

I would be personally quite happy with this code and leave it as it is. But here comes the whole point - we can get rid of that one additional condition with the usage of the Null Object pattern.

``` php
class NullCoupon
{
    public function discount($order)
    {
        return 0;
    }
}

class Order
{
    public function __construct()
    {
        $this->books = $books;
        $this->coupon = new NullCoupon();
    }

    // ...

    private function discount()
    {
        return $this->coupon->discount($this);
    }
}
```

Instead of always checking if something is null or not present and react differently in such a situation you can deliberately implement a behavior that represents, well, nothing. And the Null Object exists to solve such specific situations. When `Order::applyCoupon()` is used, it rewrites `NullCoupon` with a new one and the usage remains same.

Another useful application of a Null Object could be to create it as a stub in your tests.

## It does not end here

Below the video, one of the commenters pointed out a question: _"How can we instantiate a coupon based on the user input with the same approach?"_

Adam responded with [another screencast]({$sources[1][0]}) and came with **Database Polymorphism** implemented with Laravel Eloquent. A remarkably elegant solution, I would say. For those of you, who work with Laravel, it might be truly educational.
