    import React from 'react'
    import { Contact } from 'lucide-react';
    import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
    import { Button } from '@/components/ui/button';
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card"


    const teamInfo = [
        {
            name: 'Graham Fellows',
            occupation: 'Founder, Entrepreneur',
            skills: 'Genius-level intellect, Engineering, Combat Skills',
            interests: 'Technology, Innovation, Philanthropy',
        },
        {
            name: 'Salvatore Fazio',
            occupation: 'Designer, Founder',
            skills: 'Gadgets, Martial Arts, Crime Fighting, Justice',
            interests: 'Hand-to-hand combat, Detective skills, Stealth, Leadership',
        },
    ];


    function AboutUs() {
        return (
            <div class='flex flex-col items-center my-20 p-8'>
                <div>
                    <h1 class='mb-6 '>About Us</h1>
                    <p class='mt-6 font-normal text-xl mb-4 text-left max-w-5xl'>
                    Wicked Interactive Storytelling aims to use innovative AR technology to improve the experience of users engaging 
                    with your product or service. Our team will cater the banner to your specific application allowing for the most engaging 
                    experience for users. We have experience developing banners for applications such as historical locations and art shows. 
                    Our Team consists of innovated people dedicated to providing the best AR banner for you:
                    </p>
                </div>
                <div className='mt-10'>
                    <div class='inline-grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2'>
                        {teamInfo.map((member) => {
                            return (
                                <Card className='lg:max-w-lg md:max-w-full'>
                                    <CardHeader>
                                        <div className='flex flex-wrap gap-5'>
                                            <div>
                                                <CardTitle>{member.name}</CardTitle>
                                                <CardDescription className='pt-2'>{member.occupation}</CardDescription>
                                            </div>
                                            <Avatar>
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <Button>
                                                <Contact className='h-4 w-4 mr-1.5'/>
                                            Contact
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className='text-left'>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}

                    </div>
                </div>
            </div>
        )
    }

    export default AboutUs