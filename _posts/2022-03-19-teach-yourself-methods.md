---
date: 2022-03-19
excerpt: My 4-to-N step process for teaching myself statistical methods.
  And you can too.
output:
  md_document:
    preserve_yaml: true
    variant: gfm+footnotes
permalink: /blog/teach-yourself-methods
title: How to Learn Statistical Methods By Yourself
---

[Tyler Cowan
writes](https://marginalrevolution.com/marginalrevolution/2022/01/how-does-an-electric-car-work.html):

> Sean requests: Say you were trying to teach yourself, to a 99th
> percentile *layperson’s* level, how, say, an electric car actually
> worked. How would you go about doing that, precisely? I am not sure
> exactly how high (or low) a standard that is, but here is what I would
> do. 1. Watch a few YouTube videos. 2. Read a book or two on how
> electric cars work, along the way finding an expert or mentor who
> could answer my questions. 3. If needed, read a more general book
> about electricity. 4. Try to explain to someone else how electric cars
> work. Try again. I would recommend this same general method for many
> particular questions.

Tyler’s post stood out because it mirrors how I teach myself statistical
methods. Initially, I was going to tweet out the link endorsing Tyler’s
advice with a note that “Try again” at the end of step four should
really be its own step five. As I started composing the tweet, though, I
realized I had more to say.

## 0: Building Up

Some people can open up the latest issue of Political Analysis and
quickly get up to speed on the cool new methods, but that’s not me.
Whenever I see two *Σ* s in a row, I know it’s going to be a long day. I
have to start at the beginning and *build up* my intuition over
time—starting from the lowest technical level/highest conceptual level
and working my way, piece by piece, down into the details.[^1]

## 1: Conceptual Understanding

As in Tyler’s advice, I often start on YouTube. Here, I look for the
high-level/conceptual overviews of the topic, often intended for
non-statistical or new-to-statistics learners (see e.g., the [conceptual
process behind LDA
models](https://www.youtube.com/watch?v=T05t-SqKArY)). These videos
include toy examples, real-world applications, and very few *Σ* s. These
resources allow me to get my bearings, point out necessary
prerequisites, and help me think through the roadmap going forward.

## 2: Notation and Basic Proofs

Moving beyond the “high concept phase,” I turn to textbooks, and if I am
fortunate, publicly-posted lecture notes and slides. The latter are
especially helpful as they are succinct and teaching-focused. These
documents should include some math, and I expect to learn the standard
notation. I go through slowly, making sure I understand how the author
gets from step to step.

I specifically seek out resources targeted towards advanced
undergraduates or first-year graduate students. I avoid published
articles (unless they are specifically how-tos for non-practitioners),
which are written to prove the method to those with an existing
knowledge base (which is exactly what I’m trying to build up).

Occasionally, I won’t be able to figure out what the author is doing,
and I have to decide: am I not understanding because I am missing a
prerequisite or is the resource too technical? If it is the former, for
example—how does one derive a variance-covariance matrix from regression
coefficients?—I will go refresh my memory, often starting from a more
technical resource since I *do* have some residual[^2] knowledge of the
topic. If, on the other hand, the resource is too technical, I will
abandon it for something simpler.

I am very promiscuous with my resources. Some will click better than
others. Quickly give up and move on if it seems like something is going
to be too technical at this stage.[^3]

## 3: Code It Yourself

Now it is time to test my understanding—can I make it work in `R`?

I start by figuring out what others have already done. For most methods
(unless they are brand new, and honestly, even then) there is an
existing package you can install and a vignette or walk-through with a
toy example. If the method is older, there are often additional
resources on Rpubs or Medium with a conceptual overview (good to
reinforce learning) and a walk-through of how to use the relevant `R`
package(s).

After I download the package and run those basic commands, the real work
begins: replicating the results “by hand,” by which I mean, getting the
same results without using the package. That doesn’t necessarily mean
coding my own Gibbs sampler or `lm()` function, but I will try to work
through each stage of the process until I am convinced that, with enough
time and effort, I could explain to a first-year grad student,
step-by-step, how the method works.

If this coding exercise is proving too challenging, I will do some
googling to see if anyone else has posted their own code that walks
through the method “by hand” (for a basic example see [my course
materials on calculating ATEs “by
hand.”](https://github.com/bennoble/causal-inference-2022/blob/main/Lab1/lab1_att_po.R)
If I cannot find such a resource, I will turn to the package’s source
code and work through it that way (although this is often challenging).

The key is *not* to be able to write the package yourself, but to be
sure you understand what is happening at each stage of the process
behind the scenes.

Another helpful practice is to simulate fake data, which allows you to
test the assumptions of the model and get an intuitive understanding of
what the model recovers (see [Andrew
Gelman](https://statmodeling.stat.columbia.edu/2019/03/23/yes-i-really-really-really-like-fake-data-simulation-and-i-cant-stop-talking-about-it/)
for more on this topic).

### 4: Teach Others

Finally it is time to “teach others.” Or, really, *finish* teaching
others.

Notice, that by the end of step 3, you’ve basically created the kind of
resource I am looking for when I begin step three. So don’t hoard it!
Help me learn from your process.

You can simply (“simply”) clean and comment your code and post it
online. If you’re embarrassed or nervous or think it’s too obvious,
remember: most people don’t know what you know and your work could be
the key to helping someone else unlock this method for themselves. The
author C.S. Lewis famously made this point:

> “The fellow-pupil can help more than the master because he knows less.
> The difficulty we want him to explain is one he has recently met. The
> expert met it so long ago he has forgotten.”

## 5, 6, …, N: More Loops

At this point, you should have a pretty good understanding of how the
method works. Not necessarily enough to go write your own package or
publish in PA, but probably enough to get the gist of all those *Σ* s
and write a paper that uses the method. Depending on my goals, this is
where I stop.

However, if you want a deeper understanding, you can complete a second
loop. Now, start with YouTube videos and text books that are more
technical and less conceptual. You should be equipped to understand
these because you have built a solid foundation. The notation will look
familiar. You’ll nod along when you see the basic results and proofs.
With the basics down, you can focus on the more technical material. You
can challenge yourself by going back to the `R` code and working through
a more difficult example or expanding on your script to include the
pieces you skipped over.

Keep repeating these loops until you are satisfied with your level of
proficiency.

## Concluding Thoughts

I should emphasize that this process is not something you do in a day or
even a week. Also, it is generally kind of frustrating and not that fun.
Learning new things is hard! So don’t get discouraged. Keep toggling
back and forth between learning (via YouTube, books, notes, talking to
others, etc), practicing (`R` code, proofs), and taking breaks.
Especially that last one.

[^1]: I am no expert in
    [scaffolding](https://en.wikipedia.org/wiki/Instructional_scaffolding),
    but this process seems related to the [zone of proximal
    development](https://en.wikipedia.org/wiki/Zone_of_proximal_development).
    The key difference being that the instructor or training wheels come
    from the type and complexity of the resource I use at each stage of
    the process rather than a “more knowledgeable other.”

[^2]: No pun intended.

[^3]: This juncture might also be the place where you ask someone more
    knowledgeable for help, per Tyler’s post. I agree that that is good
    advice—even though I am stubborn and often don’t take act on it!
