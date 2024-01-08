import React, { useState } from 'react'
import { Input, Button, Typography } from "@material-tailwind/react";


const Reset = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
            <div className="w-96">
                <Typography variant="h6" color="blue-gray" className="pb-4">Enter Email Address</Typography>
                <Input name="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <Button variant="gradient" fullWidth className="mt-4">Continue</Button>
            </div>
            
        </div>
    )
}

export default Reset
