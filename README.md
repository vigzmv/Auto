# Auto
- Browser automation as a service.

# Demo
- https://youtu.be/mImwtgkIN1E

# Concept
- Auto is one of the world's first intelligent AaaS(Automation as a Service) platform. While automation is a huge buzzword, there is not much currently happening in the field that could provide an interface to a non-tech guy to leverage the power of AI and technology advancements.

- Auto would try and fill that gap. It is a smart system that can be used as a plug and play interface for automating your tasks. Once turned on, it basically records the actions that are performed by the user, stitch them together and treat them as a config file and repeat all those actions after a certain amount of time specified by the user. The interface would provide a wrapper to the multiple underlying services that maintain the state of actions while being performed, take care of authorization issues and also provide integrations to various existing apps in order to either store the results of the automated tasks or visualise them.

- IFTTT (If This Then That) provides a great interface for automating simpler tasks but depends mainly on user configurations and manual state specifications using the provided applets. Auto would take this a step further and would try to understand the user behaviour based on the tasks they are automating and thus suggests them similar tasks that it can automate by trying to learn from habits of other people who automate similar tasks through it. It will also try to make sense out of the automated data in order to find patterns and gives valuable insights.

- Under the hood, auto would basically parse the DOM tree once turned on, and map user actions to their x paths and selectors to create a virtual DOM that specifies the actions performed and the order in which they are performed. Once that is done, it would** parse that tree converting it to a config file** that can be passed to the browser automation scripts which would then do the actual automation part. The returned data would be analysed, stored and visualised and the end interface would provide multiple configuring options to the user in order to automate monotonous tasks and make sense out of their data.

- This could prove to be extremely useful to the job seekers who do the same task of applying to various places with the same data. It also can help companies trying to make a digital presence through automating the media resource fetching.

- Similarly, for normal citizens, this would mean that they wouldn't have to manually check for various sites daily for looking up simple information or they could simply automate various data entry tasks.

- With auto, the possibilities are endless.