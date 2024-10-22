import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const articles = [
    {
        title: "Revolutionizing Retail with AR",
        author: "Emily Roberts",
        postDate: "2024-10-15",
        blurb: "Augmented Reality is transforming the retail experience, allowing customers to visualize products in their own space before making a purchase."
    },
    {
        title: "AR in Education: A New Learning Frontier",
        author: "Michael Chen",
        postDate: "2024-10-20",
        blurb: "AR technology is reshaping the educational landscape by providing interactive and immersive learning experiences for students."
    },
    {
        title: "The Impact of AR on Gaming",
        author: "Sarah Wilson",
        postDate: "2024-10-18",
        blurb: "With the rise of AR games, players can now engage with virtual characters and elements in the real world, blurring the lines between gaming and reality."
    },
    {
        title: "Healthcare Innovations through AR",
        author: "James Anderson",
        postDate: "2024-10-12",
        blurb: "Augmented Reality is being utilized in healthcare for surgical planning, training, and patient education, enhancing the way medical professionals operate."
    }
];

function Blog() {
    return (
        <div className='flex flex-col items-center my-16 p-8 min-h-screen'>
            <div className='max-w-7xl w-full'>
                <h1 className='mb-16 text-center'>Blog</h1>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-12'>
                    <div className='col-span-1 md:col-span-4 max-w-full'>
                        <img src='https://placehold.co/800x600' className='rounded-lg w-full h-auto'/>
                        <h1 className='mt-6'>This is an Article Post</h1>
                        <div className='flex space-x-4 mt-2 items-center'>
                            <p className='text-muted-foreground'>Author Name</p>
                            <p className='text-muted-foreground'>2024-01-01</p>
                        </div>
                        {/* Just repeats the paragraph 6 times to fill */}
                        {Array.from({ length: 6 }).map((_, index) => (
                            <p className='mt-6 font-normal text-xl mb-4 text-left max-w-full'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        ))}
                    </div>
                    <div className='flex flex-col items-center justify-start col-span-1 md:col-span-2'>
                        <h2 className='mb-8 font-bold'>Latest Articles</h2>
                        <div className='space-y-12 w-full'>
                            {articles.map((article, index) => {
                                return (
                                    <Card key={index} className='border-0 hover:scale-105 transition'>
                                        <img src='https://placehold.co/400x300' className='rounded-lg w-full h-auto'/>
                                        <CardHeader>
                                            <CardTitle>{article.title}</CardTitle>
                                            <CardDescription>
                                                <div className='flex space-x-4'>
                                                    <p>{article.author}</p>
                                                    <p>{article.postDate}</p>
                                                </div>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p>{article.blurb}</p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;
