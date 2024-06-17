import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <>
      <div className="flex w-full">
        <Auth type="signin" />
        <Quote />
      </div>
    </>
  );
};

export default Signin;
