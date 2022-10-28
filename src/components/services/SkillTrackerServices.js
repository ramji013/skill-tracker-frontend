import axios from 'axios';

const HOST_URL = "http://localhost:4000";

//const SKILL_TRACKER_CMD_API_BASE_URL = HOST_URL + "/skill-tracker/api/v1/engineer";

const SKILL_TRACKER_QUERY_API_BASE_URL = HOST_URL + "/skill-tracker/api/v1/admin/";
const SKILL_TRACKER_OAUTH_BASE_URL = HOST_URL + "/oauth/token";
class SkillTrackerService {

    fetchAllSkill() { return axios.get(HOST_URL + '/skill-tracker/api/v1/skills') };

    getToken() {
        const headers = {
            'Authorization': 'Basic c2tpbGx0cmFja2VyQ2xpZW50OnNraWxsdHJhY2tlclNlY3JldA==',
            'Content-Type': "application/x-www-form-urlencoded"
        }
        return axios.post(SKILL_TRACKER_OAUTH_BASE_URL + "?username=tet1356&password=tet1&grant_type=password",
            JSON.stringify({
                username: 'tet1356',
                password: 'tet1',
                grant_type: 'password'
            }), {
            headers: headers
        });
    }

    getEmployeeBySearchCriteria(criteria, criteriaValue, token) {
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        return axios.get(SKILL_TRACKER_QUERY_API_BASE_URL + criteria + "/" + criteriaValue, {
            headers: headers
        });
    }

    getEmployees(token) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
        return axios.get(SKILL_TRACKER_QUERY_API_BASE_URL, {
            headers: headers
        });
    }
}

export default new SkillTrackerService();