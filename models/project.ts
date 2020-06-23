export default class Project {
    id: number;
    name: string;
    role: string;
    teamSize: number;
    teamLead: boolean;
    constructor(id:number = -1, name:string ='', role:string, teamSize:number, teamLead:boolean) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.teamSize = teamSize;
        this.teamLead = teamLead;
    }
}