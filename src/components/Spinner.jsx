import BeatLoader from "react-spinners/BeatLoader";

const override = {
    display: 'block',
    margin: '100px auto',
    textAlign: 'center'
};

const Spinner = ({ loading }) => {
  return (
    <BeatLoader 
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size={20}

    />
  )
}

export default Spinner