import { useState } from 'react';
import { Button, Input } from '@mui/material';
import Repo from '../../Repositories'

interface ICreate{
    attributes: {
        title: string;
        description: string;
    }
}

function CreateActivity() {
    const initialCreate: ICreate = {attributes:{title:'',description:''}};
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
        try{
            await Repo.ActivityRepository.createActivity
        }catch (error: any) {
            console.log(error);
        }
      };

    return (
        <div>
            <Input
                type="text"
                name="title"
                value={create.attributes.title}
                onChange={handleChange}
                placeholder="Name"
            />
            <Input
                type="text"
                name="description"
                value={create.attributes.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <Button  onClick={onCreateActivity}>
                Create
            </Button>
        </div>
    )
}

export default CreateActivity