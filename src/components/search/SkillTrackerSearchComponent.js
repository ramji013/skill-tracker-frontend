import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import SkillComponent from '../skill/SkillComponent';
import Box from '@mui/material/Box';
import './search.css'
import Button from '@mui/material/Button';
import SkillTrackerServices from '../services/SkillTrackerServices';
import SkillTrackerResultComponent from '../result/SkillTrackerResultComponent';

export default function SkillTrackerSearchComponent() {

    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [employeeData, setEmployeeData] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [skillValue, setSkillValue] = useState('');

    const searchEmployee = () => {
        SkillTrackerServices.getToken().then(res => {
            setAccessToken(res.data.access_token);
        }).then(
            SkillTrackerServices.getEmployeeBySearchCriteria(searchCriteria, searchValue, accessToken).then(
                res => {
                    alert(res.data[0])
                    setEmployeeData(res.data);
                }
            )
        );
    }


    /* const searchEmployee = () => {
         setEmployeeData([
             {
                 "id": "3c996d23-8b2c-4b77-aacd-253776f9c530",
                 "name": "test12",
                 "email": "test@gmail.com",
                 "mobile": "23659756343",
                 "associateId": "CTS12321343",
                 "createdAt": "2022-10-26T23:18:53.000+00:00",
                 "modifiedAt": "2022-10-26T23:18:53.000+00:00",
                 "skills": [
                     {
                         "skill": "Spring Cloud",
                         "skillLevel": 12
                     },
                     {
                         "skill": "Spring Boot",
                         "skillLevel": 10
                     }
                 ]
             }
         ]);
     }*/
    const handleNameChange = (event) => {
        setName(event.target.value);
        setSearchCriteria(event.target.name);
        setSearchValue(event.target.value);
    }
    const handleIdChange = (event) => {
        setId(event.target.value);
        setSearchCriteria(event.target.name);
        setSearchValue(event.target.value);
    }

    const handleSkillChange = (event) => {
        setSkillValue(event.target.value);
        setSearchCriteria(event.target.name);
        setSearchValue(event.target.value);
    }


    return (
        <Box component="form" className='pagedesign' noValidate autoComplete="off">
            <div className="elements">
                <div>
                    <h2>Admin Panel</h2>
                </div>

                <div>
                    <TextField id="standard-basic" label="Search By Associate Name" variant="standard" name="name" value={name} onChange={handleNameChange} disabled={id !== '' || skillValue !== ''} />
                </div>
                <div>
                    <TextField id="standard-basic" label="Search By Associate ID" variant="standard" name="id" onChange={handleIdChange} disabled={name !== '' || skillValue !== ''} />
                </div>
                <div>
                    <SkillComponent handleSkillChange={handleSkillChange} skillValue={skillValue} name={name} id={id} />
                </div>
                <div>
                    <Button variant="outlined" onClick={searchEmployee} disabled={name === '' && id === '' && skillValue === ''}>Search</Button>
                </div>
            </div>
            <div className="SkillTrackerTable">
                <SkillTrackerResultComponent employee={employeeData} />
            </div>
        </Box>
    );
}
