const Repos = React.createClass({
    render() {
        return (
            <div>
            <h3> User Repos</h3>
            <ul className="list-group">
                {this.props.repos.map((repo, index) =>{
                    <li className="list-group-item" key = {repo.name}>
                    <h4><a href={repo.html_url}>{repo.name}</a></h4>
                    <p>{repo.description}</p>
                    </li>
                }
                )}
            </ul>
        </div>
        )
    }
})

class Repos extends React.Component {
    render() {
        return (
            <div> 
                <h3>User Repos</h3>
                <ul className="list-group">
                {this.props.repos.map((repo, index) => {
                    return (
                        <li className="list-group-item" key={repo.name}>
                        <h4><a href={repo.html_url}>{repo.name}</a></h4>
                        <p>{repo.description}</p>
                        </li>
                    )
                }
                )}
                </ul>
            </div>
        )
    }
}


// stateless solution here!

const Repos = ({repos}) => {
    retrn (
        <div>
        <h3>User Repos</h3>
        <ul className="list-group">
            {repos.map((repo, index) => {
                return (
                    <li className="list-group-item" key={repo.name}>
                    <h4> <a href={repo.html_url}>{repo.name}</a></h4>
                    </li>
                )
            })}
        </ul>
        </div>
    )
}



const Repo = ({repos}) => {
    return (
        <div> 
            <h3>User Repos</h3>
            <ul className="list-group">
            // pass the props here!
            {repos.map((repo, index) => {
                return (
                    <li className="list-group-item" key={repo.name}>
                    <h4><a href={repo.html_url}>{repo.name}</a></h4>
                    <p>{repo.description}</p>
                    </li>
                )
            }
            )}
            </ul>
        </div>
    )
}


