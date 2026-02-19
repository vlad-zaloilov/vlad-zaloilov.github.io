export function RenderingEngineProject() {
    return(
        <div className="subtitle-row">
            <div className = "video-row display-flex-row">
                <div className="video-text">
                    <h1 className="video-title">3DEngine</h1>
                    <p>
                        A work-in-progress OpenGL-based 3D rendering engine i'm building as a learning project to explore
                        graphics programming, combining concepts from multiple sources:
                    </p>
                    <div className="programming-text">
                        <ul>
                            <li>Following tutorials on <b>learnopengl.com</b></li>
                            <li>Developing alongside <b>computer graphics coursework</b></li>
                            <li>Applying ideas from <b>Ray Tracing in One Weekend</b></li>
                            <li>Potentially exploring <b>Physically Based Rendering: From Theory to Implementation</b> in the long term</li>
                        </ul>
                    </div>
                    <div>
                        <p className="contact-info-text">Link:</p>
                        <a href ="https://github.com/DuhDiamond/3DEngine"
                        className="link">https://github.com/DuhDiamond/3DEngine</a>
                        <p className="contact-info-text">Progress updates are available in the CommitLogs folder.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
