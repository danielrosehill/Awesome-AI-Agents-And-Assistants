# (Opinionated) Notes on AI Agent & Assistant Platforms

So that I don't look like an old dinosaur in a few months time, this note was drated on Feb 14, 2025.

The AI agents and assistants ecosystem is quickly hotting up. 

These are my notes as to where the current fault lines lie between the different categories.

## Assistants Or Agents?

At this fairly early stage of adoption, no clear distinction has been drawn between assistants and agents yet. 

 One seemingly clear way to distinguish between the two is whether the AI tools have agentic "tools" at their disposal. Tools can be developed through simple Python scripts (see: OpenWebUI) or through more elaborate mechanisms like access to MCP servers. 
 
 According to this logic, a tool that was simply a system prompt on top of an LLM or an LLM with RAG might be labelled an "assistant" whereas something that could "do" things would be an "agent". This latter category might be computer use or the ability to take actions on an API. 

 Although this provides a very broad yardstick, it's not hard to find glaring exceptions. Terminology will probably standardize over time. 

 ## Agent-Specific vs. General LLM Platforms

The vast majority of AI platforms seem to be getting into agents at the moment. Equally, there is an independent agent first landscape developing. For the purpose of distinguishing between these two groups of tools, I've used separate headings.

## Orchrestration And Build Tools Vs. Frontends

Currently, the tendency among software manufacturers has been to focus on either orchestration and development environments or on front ends - but not to offer platforms that "do" both. 

This tendency is probably explicable by the fact that many of the first serious adopters of AI agent technologies have been businesses using them for use cases like customer support, where perhaps only one or several agents are provisioned and managed. 

This first wave of agents has been used to replace previous and simplistic rules based agents that were despised by customers. Whether actual LLM backed AI agents can deliver a significantly better experience remains to be seen! Confusingly, both tend to be referred to as."bots" by the general public, although the technical distinctions under the hood are vast.

When building one agent, it makes a lot of sense to fine tune the agent in a dedicated environment and then provide it with a customized front end for optimal user experience. A dedicated orchrestration agent is not necessary in such cases.  But for users who require fleets of hundreds of agents, however, this separate and individual approach doesn't make much sense. The most obvious gap in the agent market at the moment is here. 

To muddy the waters even further, many orchestration and management platforms commonly provide some basic front end features leading many AI enthusiasts - including the author - to excitedly proclaim they have found the perfect tool only later to discover that it's not quite the full-stack agentic experience they were searching for.Scratching beneath the surface a little, one frequently discovers that these are commonly really intended as previous type environments and lack maturity for mainstream frontend use.  The tides will shift dramatically this year and next. 

As usually happens in technology, various descriptors have been proposed and advanced to describe similar tools. Arguably, and depending upon your level of cynicism, there isn't much difference between any of the following:

- AI orchrestration platform
- AI DevOps Platform
- LLM DevOps Environment

---

## Agent Frontends and UIs

I'll use this tool in the list to categorise platforms that are intended primarily or exclusively for the purpose of provisioning useful front ends to assistants for end users. 

At the time of writing, this category is remarkably thin. For example, despite OpenAI Assistants API being a widely used tool, a "go-to" or "best in class" frontend for interacting with those agents has yet to really emerge in either the SaaS or self hosted fifedoms. Again, this hint strongly to the fact that many users of these tools are likely enterprises provisioning one agent for use cases like customer support. 

While Assistants API provides an easy to use integrated assistants and vector store platform, it requires a frontend.

## Agent Integration, Automation

In order for agents to do "things", they need to interact with a potentially unlimited variety of APIs. There's probably going to be a huge growth in coming years of platforms that excel in provisioning the glue needed to connect agents with specific services and actions. There will likely be a "Zapier for AI Agents." Or more likely two dozen of them. 

MCP led by Anthropic, is emerging as its own ecosystem. Whether it and general agentic platforms will continue to coexist or compete remains to be seen. 

 ## Low-Code/No-Code Platforms

Low code and no code remains a pronounced trend in the world of technology. Likewise, in agent orchestration and development, there is a no code scene. As in other areas of technology, on the flip side of the coin, there are platforms that advertise themselves as code centric or developer first. 
 
## Open Source & Self Hostable

Many Software as a Service products also offer open source or community editions of their software, offered for free to the general community. Some open source products are purely open source without a commercial counterpart. Many SaaS products do not open source at all

## Orchestration Frameworks

With a couple of agents, there isn't much need for an orchestra conductor, much as when people ran one or two Docker containers, the idea of Kubernetes probably sounded like a possibly complicated idea. 

The future direction being plotted and forecasted by many at the moment is one in which agents continue to multiply prodigiously. Even as a personal user, when one begins scaling into the hundreds of agents, the idea of having one agent to act as a kind of signposter becomes more appealing. 

Orchestration platforms exist to connect individual agents with platforms, as well as to connect agents with other agents. These are often known by the same terminology, despite the fact that these are very different things. 

## RAG 

AI agents are actually multiple different technologies being branded under one name. The initial wave of agents came when companies began vectorising their internal knowledge stores in order to add it as additional context to out of the box large language models. RAG pipelines can be used for internal knowledge addition, grounding, or both. 

These will commonly be called assistants even when they don't have explicit agentic capabilities per se (if we can agree on what that means!)

I would call the evolution of agents that can do things (interact with APIs and systems like computers) the "second wave" of agents. The second wave of agents will build upon the context edition of their forebearers.  The type of AI agents generating exciting at the moment are those which leverage both context awareness from RAG with agentic capabilities. These two worlds are likely to dovetail into one technology stack.

## Personal Assistant Platforms & "Second Brains"

Frequently the same technology is marketed to businesses and consumers under very different terms, although the underlying technology might be closer, essentially the very same thing. 

This is a case in today's emerging AI agents world where we see consumer and business agent building tools coming in distinctive packaging. 

I believe that a huge potential area of benefit is being overlooked in personal agents,-  highly contextualized on individuals data stores (essentially, personal RAG) 

Hyper-personalized AI experiences have received far less attention than the idea of agents which can gain access to private personal information. The type of agentic tools I've been experimenting with lately have involved trying to aggregate large stores of personal data- with the idea of having one highly personalized agent rather than many. 

 ## Social Networks & Community

 As in other parts of the technology world, there is a downstream effect in the world of agent building, whereby communities and ecosystems take shape after promising fresh technologies have come to market and raised awareness about the capabilities. 

 Some AI agent builders are eager to monetize their efforts through selling configurations via agent marketplaces. Others are taking a more bespoke approach, configuring specific agents for individual clients. 

 Professional communities and knowledge bases will build around these. 

## Vector Databases

Vector database storage remains highly relevant to AI agents because it's the foundation of RAG at the moment. Likewise, embedding models which are used to embed data into these specialized databases. 

There are a number of excellent open source and proprietary vector databases easily available, as well as different embedding models. 

## Voice Agents

 A particularly interesting area of the world of Agentic AI is that of voice agents. 
 
 Sadly, to date, much interest in the space has been dominated by the idea of using AI agents for tasks like automated outbound calling and call center support. 
 
 In my opinion, this is a great pity. It solidifies in many the idea that AI is a nefarious force snatching away jobs - in this case relatively poorly paid ones. It also overlooks the many ways in which voice agents could make benefits on individual lives. I personally believe and hope that AI agents with voice capability can be used in applications like mental health support (etc) with appropriate "human in the loop" supervision and regulation.

 In parallel to the adoption of voice agents for sales and customer service use cases, there is a niche world of AI avatar enthusiasts who Use voice agents to build characters. To do this, they combine system prompts with personal voices and character configurations. This is fun and exciting. 