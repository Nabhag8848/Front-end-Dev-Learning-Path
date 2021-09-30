# How internet Works?

Learning From [FreeCodeCamp](https://youtu.be/zN8YNNHcaZc)

## Switch Devices and why we need it?

> - Switch is used to accomplish the communication between two or more computers in same environment.
>
> - In order to connect these computers we generally use a Copper cables and type of this cable is CAT 5
>   or CAT 6 in small environment. ( CAT 6 > CAT 5)(CAT = Catergory.)Fibre optic cables are also used.
>
> - Fibre Optic Cables are faster than Copper cables in Data Transmission.
>
> - Wireless Technology cannot be used in Switch.but can be used in access point devices.
>
> - when we connect switch and computers with cables we created a network. and all these computers are said to be in they are in same network.(LAN)
>
> - LAN: Local Area Network is a computer network which connects computers to communicate with each other in restricted area.
>
> - to Create LAN use Switch.
>
> - when a Any pc wants to send message(Packet/Frame) to other pc.First that packet is send to switch and then switch opens that packet in order to see destination
>   and then sends to destination.
>
> - when one computer can send packet to other they are said to be in same network.

![Made in Cisco Packet Tracer](../img/LAN.png "Local Area Network")

## Router Devices and why we need it?

> - Switch Devices helps to communicate different devices but to enable this devices to connect with internet we need router.
>
> - The main task of router is to enable computers to connect with the Internet.
>
> - In order to connect device with internet, we connect device and switch with cable, switch and router is connected through copper cable and lastly Router is
>   connected with cable provided by Internet service provider.
>
> - when Any pc wants to send message(Packet/Frame) to Internet.First that packet is send to switch then to the router which delivers the packet from LAN
>   to the Internet.
>
> - When any device can send packet to internet that means that device can now communicate with Internet.

## What does the internet Represent?

> - Router is a device which can establish communication between Different LAN in different Places.
>
> - Connecting computer to Internet means connecting to another computer anywhere in world.
>
> - The Structure that connects all the LANs in the world is the Internet.
>
> - Structure of internet consist of Tons of Routers and other devices and this routers are distributed around the world in organised manner.

### - Why there are so many of Routers?

> 1. To answer these lets say we have one gaint Router in middle of earth and all the LANs are connected to internet via these router.
>
> 2. As all LANs are connected means all are in Same network.
>
> 3. Lets say if the gaint router brokes.This will create a Problem in Whole earth.
>
> 4. And think of place which is farthest from these router will required a very long cable.
>
> 5. If Internet uses only one Router then,this will overload the router.
>
> 6. If All LAN's Are connected to one router it will create a Mess.To Minimise it we use Distributed Structure.
>
> 7. If any of Routers broke in distributed Structure, efficiency for data transmission gets less but it will solve the single point of Failure problem.
>
> 8. To Avoid All these we use So many Routers instead.

### - What are Home-Routers?

> 1. Home Router is a combo of Switch and Router and can be only used when there is limited number of devices.

### - How to Visualise Internet and how it Looks like in Real Life?

Checkout [here](https://www.infrapedia.com/app)

> - Colourful Lines you see are the Fibre Optic Cables which are placed under water deep down these allows us to communicate between two different continents.
>
> - Copper Cables aren't used because its data Transmission is slow comparatively and as the length of copper cables increases data Transmission error increases.
>  so we use Fibre optic Cables to solve this.

### How Packet Moves over the Internet?

> - Lets say we want to send a packet from LAN1 to LAN2 over the internet.
>
> - For this, Packet from LAN1 to go to the Switch and it will open up and learns the destination address and understands that it needs to send to the router.
>
> - When packet reaches router it will see the content and learns the Destination address and understands that it needs to send to the Internet.
>
> - Router sends Packet to the Key Router Present in Internet Structure.
>
> - As it reaches the Key router it Learns the Destination Address and choose Path According to the Information which is in Routing Table. (Called Forwading in Technical Terms.)
>
> - Every router has Special table called Routing Table.Which Helps router to choose appropriate path.
>
> - There is special processor inside router.These Processor creates routing table on basis of some complex Algorithm and output of Algorithm is stored in Routing Table.
>
> - So everytime it passes packet to different router it will learn destination address and choose path according to the Routing Table.
>
> - Note that Router always trys to send packet as fast as possible it doesn't choose the shortest path everytime.Other factors like Congestion Control(to avoid Traffic) are also taken care of 
> by processor inside.
>
> - At the end it will reach to the Key Router of LAN2 from that it will pass to the LAN2 (device).