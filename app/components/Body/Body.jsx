import BodyContent from "./BodyContent";
import BodyNavbar from "./BodyNavbar";

const Body = () => {
    return (
        <div className="h-full">
            <BodyNavbar />
            <BodyContent />
        </div>
    );
};

export default Body;