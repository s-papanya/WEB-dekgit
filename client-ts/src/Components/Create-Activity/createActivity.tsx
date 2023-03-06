import { ChangeEvent, useState } from 'react';
import { Button, Input } from '@mui/material';

import PostActivity from "../../Models/postActivity"
import Repo from '../../Repositories'


function CreateActivity() {
    const [title,setTitle] = useState<string>('')

    const newActivity : PostActivity = {
        data: {
            title: title,
          }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
        }
    }

    const handleTitleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Repo.ActivityRepository.createActivity(newActivity)
        window.location.reload()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                onKeyDown={handleKeyDown}
                required
            />
            <Button  type='submit'>
                Create
            </Button>
        </form>
    )
}

export default CreateActivity