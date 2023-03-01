import { useState } from 'react';
import { Button, Input } from '@mui/material';
import axios from 'axios';

interface ICreate{
    title : string
}

function CreateActivity() {
    const initialCreate: ICreate = { title:" " };
    const [create, setCreate] = useState<ICreate>(initialCreate);

    const handleChange = ({
    target,
    }: {
    target: { name: string; value: string };
    }): void => {
    const { name, value } = target;
    setCreate((currententity) => ({
        ...currententity,
        [name]: value,
    }));
    };

    const onCreateActivity = async (): Promise<void> => {
        try {
          const url = `http://localhost:1337/api/auth/local/register`
          const data = await axios.post(url,create)
          console.log(data.data);
        } catch (error: any) {
          console.log(error);
        }
      };

    return (
        <div>
            <Input
                type="text"
                name="title"
                value={create.title}
                onChange={handleChange}
                placeholder="Name"
            />
            <Button  onClick={onCreateActivity}>
                Create
            </Button>
        </div>
    )
}

export default CreateActivity