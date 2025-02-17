
import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
    return (
        <div style={{width:"400px", marginTop:"100px"}}>
        <TailSpin
            height="80"
            width="100%"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    );
};  
export default LoaderComp;