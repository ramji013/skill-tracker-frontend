import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from 'react';
import SkillTrackerServices from '../services/SkillTrackerServices';

export default function SkillComponent({ handleSkillChange, skillValue, name, id }) {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        SkillTrackerServices.fetchAllSkill().then(res => {
            setSkills(res.data);
        })
    }, [])

    /*useEffect(() => {
        setSkills([
            {
                "id": 1,
                "skill": "Java",
                "isTechSkill": "Y"
            },
            {
                "id": 2,
                "skill": "HTML-CSS-JAVASCRIPT",
                "isTechSkill": "Y"
            },
            {
                "id": 3,
                "skill": "ANGULAR",
                "isTechSkill": "Y"
            },
            {
                "id": 4,
                "skill": "REACT",
                "isTechSkill": "Y"
            },
            {
                "id": 5,
                "skill": "SPRING",
                "isTechSkill": "Y"
            },
            {
                "id": 6,
                "skill": "RESTFUL",
                "isTechSkill": "Y"
            },
            {
                "id": 7,
                "skill": "HIBERNATE",
                "isTechSkill": "Y"
            },
            {
                "id": 8,
                "skill": "GIT",
                "isTechSkill": "Y"
            },
            {
                "id": 9,
                "skill": "DOCKER",
                "isTechSkill": "Y"
            },
            {
                "id": 10,
                "skill": "JENKINS",
                "isTechSkill": "Y"
            },
            {
                "id": 11,
                "skill": "AWS",
                "isTechSkill": "Y"
            },
            {
                "id": 12,
                "skill": "AZURE",
                "isTechSkill": "Y"
            },
            {
                "id": 13,
                "skill": "SPOKEN",
                "isTechSkill": "N"
            },
            {
                "id": 14,
                "skill": "COMMUNICATION",
                "isTechSkill": "N"
            },
            {
                "id": 15,
                "skill": "APTITUDE",
                "isTechSkill": "N"
            }
        ]);
    }, [])*/



    return (

        <FormControl sx={{ m: 1, minWidth: 180 }}>
            <InputLabel>Skill To Search</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={skillValue}
                label="Skill to Search"
                name="skill"
                onChange={handleSkillChange}
                disabled={name !== '' || id !== ''}
            >
                <MenuItem key={'Skill To Search'} value={''}>{'Skill To Search'}</MenuItem>
                {skills.length ? skills.map(s => (
                    <MenuItem key={s.id} value={s.skill}>{s.skill}</MenuItem>
                )) : 'Skill list service not available'}

            </Select>
        </FormControl>

    );
}