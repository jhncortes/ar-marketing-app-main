import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "./ui/button";





const CardWrapper = ({title, buttonLabel, children}) => {
  return (
    <Card className="w-[350px] mb-4">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter className='justify-center'>
            <Button className='w-full'>{buttonLabel}</Button>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper