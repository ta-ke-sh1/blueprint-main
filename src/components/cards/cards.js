import { Grid } from "@mui/material";

export function ProjectCardList(props) {
    const { project, index } = props;
    return (
        <Grid item xs={12}>
            <div
                className="project-card-list"
                onClick={() => {
                    props.handleNavigate(index);
                }}
            >
                <div className="project-card-content">
                    <div className="serif-light-italic s-40">({project.index})</div>
                    <div
                        style={{
                            marginLeft: "40px",
                        }}
                    >
                        <div className="serif-light-italic s-40">{project.name}</div>
                        <div className="regular">by {project.author}</div>
                    </div>
                </div>
                <div className="project-card-bg"></div>
            </div>
        </Grid>
    );
}

export function ProjectCardGrid(props) {
    const { project, index } = props;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div
                className="project-card-grid"
                onClick={() => {
                    props.handleNavigate(index);
                }}
            >
                <div className="project-card-index">
                    <div className="serif-light-italic s-40">#{project.index}</div>
                </div>
                <div className="project-card-content">
                    <div className="serif-light-italic s-40">{project.name}</div>
                    <div className="regular">by {project.author}</div>
                    <div></div>
                </div>
                <div className="project-card-bg"></div>
            </div>
        </Grid>
    );
}
