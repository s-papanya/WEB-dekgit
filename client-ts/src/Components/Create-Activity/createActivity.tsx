import { useState } from 'react';
import { Button, Input } from '@mui/material';
import Repo from '../../Repositories'

const initialCreate = {attributes:{title:'',description:''}};

function CreateActivity() {
    const [create, setCreate] = useState(initialCreate);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)  => {
    const { name, value } = event.target;
    setCreate({...create,[name]:{value}})
    };

    const onCreateActivity = async (): Promise<void> => {
        try{
            const data = await Repo.ActivityRepository.createActivity
            console.log(data)
        }catch (error: any) {
            console.log(error);
          }
      };

    return (
        <div>
            <Input
                type="text"
                name="attributes"
                value={create.attributes.title}
                onChange={handleChange}
                placeholder="Name"
            />
            <Input
                type="text"
                name="attributes"
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