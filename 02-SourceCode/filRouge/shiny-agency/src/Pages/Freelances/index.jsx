import DefaultPicture from '../../Assets/profile.png'
import Card from '../../Components/Card';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
]


function Freelances() 
{
    return (
        <div>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {freelanceProfiles.map((profile, index) => 
            (
                <Card key={`${profile.name}-${index}`}  label={profile.jobTitle} picture={profile.picture} title={profile.name}/>
            ))}
        </div>
    );
}

export default Freelances;
