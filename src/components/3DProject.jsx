export function ThreeDProject() {
    return(
        <div className = "video-row display-flex-row">
            <div className="video-text">
                <h1 className="video-title">Sci-Fi Robot Bug</h1>
                <p>
                    I created this project originally over a year and a half ago, but have
                    done several major overhauls since, with the most recent texture update
                    completed six months ago.
                </p>
                <div className="break"></div>
                <p>
                    I modelled and rigged it in Blender using the constraints system,
                    textured it with Blender's shader nodes and Adobe Substance Painter,
                    then animated and rendered the final piece in Blender.
                </p>
            </div>
            <video className="video-fit"
            controls
            muted
            loop
            >
            <source src="/videos/robotbug.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    );
}