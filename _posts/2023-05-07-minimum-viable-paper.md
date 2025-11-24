---
date: 2023-05-07
excerpt: Don't spend valuable time coming up with an amazing research idea. Come up with many ideas, try the best ones quickly, and choose the one that works.
output:
  md_document:
    preserve_yaml: true
    variant: gfm+footnotes
permalink: /blog/minimum-viable-paper
title: Write Your First Draft Faster by Writing the "Minimum Viable Paper"
---

The hardest part of the research process is figuring out what exactly you ought to research. 

If you have a good, clear question, you can move forward. You can tick through the to-do list of collecting data, measuring concepts, running analyses, writing your introduction and theory.  If you *don't* have a good question, on the other hand, then what? It's not like you can just put "have a good idea" on your to-do list, set aside thirty minutes, and magically come up with one.

So how do you have a good idea?

Well...a *bad* way to have a good idea is to sit around trying to come up with a good idea. A better approach is to come up with many ideas quickly (most of which will be bad), and then determine which ones are any good. This solution then suggests a new question: how do you know which of the many bad ideas are actually good?

My answer: by writing the **minimum viable paper**.

## What is the minimum viable paper?

Entrepreneurs talk about something called the "minimum viable product." It's the version of whatever they're working on that is just barely usable—but usable enough to solicit feedback from advisors and customers.

As beautifully [described on Wikipedia](https://en.wikipedia.org/wiki/Minimum_viable_product):

> "A focus on releasing an MVP means that developers potentially avoid lengthy and (possibly) unnecessary work. Instead, they iterate on working versions and respond to feedback, challenging and validating assumptions about a product's requirements."

As (beautifully?) plagiarized by me:

> "A focus on releasing an MVP(aper) means that academics potentially avoid lengthy and (possibly) unnecessary work. Instead, they iterate on working versions and respond to feedback, challenging and validating assumptions about a paper's requirements."

Writing an academic article is hard. It takes a lot of time and effort. Time is short. Effort is costly. If you spend weeks coming up with ~the one great idea~ and months perfecting the measurement, analysis, and writing—sanding off all the rough edges before you solicit feedback—you're taking on an incredible amount of risk. What if, at the end of that process, you discover that no one is excited about the question?[^1] Or that the hypothesized relationship between x and y doesn't actually exist? Then you're back where you were at the beginning of this paragraph—hoping that, this time, it works out better. 

The minimum viable paper solves these problems. 

**First, come up with several (possibly good, probably bad) ideas.** You do this very quickly. You don't worry about whether any of them are novel or exciting. As [Annie Murphy Paul writes](https://anniemurphypaul.substack.com/p/the-benefits-of-creative-grit) in a Substack post on "Creative Grit:" 

> "Research shows that creativity stays steady or even increases across the length of an idea-generation session. Conventional and obvious notions are often the first to surface, and it takes a while to clear these out and move on to more original ideas."

Ironically, focusing on quantity over quality is more likely to lead to ~the one great idea~ than a determined pursuit of it. For some tips on how to have more (bad) ideas, see also: my post on [how to have more ideas](https://benjaminnoble.org/blog/more-ideas) and Jason Zook's post on [No Bad Ideas Brainstorming](https://wanderingaimfully.com/brainstorming/).

**Second, figure out how you could run a regression *today*.** At bottom, scientific papers live or die based on the outcome of `lm(y ~ x, df)`. If the sign on x matches your hypothesis, and if there are stars, your paper will probably get published somewhere. If not, well...it's going to be much harder. 

Writing the minimum viable paper means running that regression as fast as you possibly can. 

In practice, this does *not* mean working long hours to develop the perfect measure, devise the perfect identification strategy, collect the final data, and run a bunch of robustness checks. Rather, it means figuring out what data and relevant measures *already exist*, data and measures you can source and apply in a few hours, so that you can get a reasonable indication of whether there's any *there* there.

For example, when I started my paper about [emotional rhetoric in presidential speeches](https://benjaminnoble.org/files/papers/noble_how_presidents_persuade.pdf), I had an idea that presidents would use more emotional language when they were institutionally strong. But these are hard things to measure—emotional language, institutional strength. It would take me months to figure this all out. So instead of solving those problems, I loaded up a corpus of presidential speeches I had collected for a previous project. I borrowed an existing measure of moral language (which is related, but not the same, as emotional rhetoric) from my friend [Jae-Hee's awesome AJPS paper](https://www.jstor.org/stable/45295318), and I coded a binary variable of unified government from [Wikipedia's page on party divisions in Congress](https://en.wikipedia.org/wiki/Party_divisions_of_United_States_Congresses). Then I ran `lm(moral_language ~ unified, pres_data)`. 

Lo and behold, the coefficient was positive and statistically significant. This analysis convinced me that there might actually be something there and that it would be worthwhile to think about solving some of those more difficult issues. And what's more, even if the results went away with better measurement and identification of emotional language, I had insurance: I could always write a paper about presidents' moral language use.

Now, this all worked out for me. But it could just as easily have failed. So let's consider alternative scenarios. Had the coefficient been positive but not statistically significant, I wouldn't have been too discouraged. After all, the moral language variable was just a proxy for the thing I cared about, and these are correlational results. It's possible that after spending some time on the project, I would get to the hypothesized results. The only thing I'd lose there is the insurance policy. But if the coefficient had been zero, or negative, or negative and statistically significant, I would have worried. Yes, it's always possible that after spending more time on the project things would turn around. But I would question whether it was worth the time and effort right then. I'd probably try one of the other ideas from that brainstorming session before spending more time on this question.

**Third, write the [terrible, horrible, no good, very bad](https://en.wikipedia.org/wiki/Alexander_and_the_Terrible,_Horrible,_No_Good,_Very_Bad_Day) version of the paper.** If your initial efforts suggest there's something there, it's time to write a short, ugly version of the paper. This document should include the framing, a brief theory and hypothesis section, a description of the data, your dumb regression, and a discussion of the results. Then, take this paper to your advisor and colleagues and get feedback. See if people are excited about the idea (they probably will be—people are always excited about results). See if people have suggestions for how to actually measure and analyze the thing you care about (this helps you!). It is much easier to get good feedback on a thing that exists rather than an idea floating around in space.

**Of course, this is not the end of the process, but the beginning.** Once you get feedback, it's time to iterate and improve. To quote [author Robin Sloan](https://issuu.com/golfstromen/docs/sloan-2009): 

> "As you refine your iterative process, you make the loops faster and more productive. Ideally, iteration isn't a circle at all; it's a spiral. With each loop, you know more about the world. With each loop, you're making something better. With each loop, you're simply making better."

Get better data. Devise a better measurement and identification strategy. Write a better introduction and theory. Frame the paper in a more interesting and exciting way. Get more feedback. Do it again. With each loop, the process goes faster and your paper improves. It's not easy, but hey, neither is coming up with ~the one great idea.~

[^1]: To what extent does it matter whether others are excited by the idea if *you* are excited about it? Certainly, many great literatures begin with someone asking and answering a question no one else felt was interesting, important, or worth pursuing. In this case, I would argue that the minimum viable paper strategy is just as applicable. It is much easier to chart a path forward on a novel idea or theory when you can show others the basic framework and initial results rather than try to persuade them from the idea alone.
