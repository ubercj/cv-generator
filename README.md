# CV Generator

See the finished project [here](http://ubercj.github.io/cv-generator).

This is a project from The Odin Project's full-stack web development curriculum. See the project description [here](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/cv-application).

## Skills I learned

Working on this project really hammered home the basic React fundamentals of passing down props and lifting up state. I also couldn't help myself and jumped ahead to using only functional components with State hooks instead of Class components. I expected it to be hard to make that switch, but it was surprisingly intuitive.

## Where I struggled

On multiple occassions, I kind of tore everything down and reconceptualized the whole application. It was difficult for me to decide where State was going to live and what needed to be broken out into new components. I feel like I still haven't completely "gotten" the React best practices, and my application doesn't feel as reusable as I would like for it to be.

## Areas for improvement

I ended up repeating a lot of lines of code, and my `handleChange` function is one long `switch` statement, which is probably never good. Especially in React, but also in general, I want to adhere to __DRY__ as much as possible, and I think I didn't really accomplish that here.

Also, the whole point of React is to create components that are pretty all-purpose so that they can be reused for multiple purposes. But I also had some components (like the SchoolForm and WorkForm) that felt like they should obviously inherit from another component. I was really trying to stick to ["Composition vs Inheritance"](https://reactjs.org/docs/composition-vs-inheritance.html), and I think I got confused. I even tried using `props.children` at first, but that only made matters worse and led to me tearing down the project again.

In general, the whole application could have been structured better, but I'm fairly satisfied because it at least does what it's supposed to do. My next stop is learning more about lifecycle methods and event hooks, so I'm looking forward to what I can do with those.