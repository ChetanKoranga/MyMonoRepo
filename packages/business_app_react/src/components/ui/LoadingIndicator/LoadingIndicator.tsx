import { connect } from "react-redux";

// import { LoadingIndicator as Loader } from "webcore-ux/nextgen/components";
import Backdrop from "@mui/material/Backdrop";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading }) => {
  //   const useStyles = makeStyles((theme) => ({
  //     backdrop: {
  //       zIndex: theme.zIndex.drawer + 1,
  //       color: "#fff",
  //       background: "rgb(0, 0, 0, 0.5)",
  //     },
  //   }));
  const classes = {
    backdrop: {
      zIndex: (theme: { zIndex: { drawer: number } }) =>
        theme.zIndex.drawer + 1,
      color: "#fff",
      background: "rgb(0, 0, 0, 0.5)",
    },
  };
  return isLoading ? (
    <div id="loadingIndicator">
      <Backdrop sx={classes.backdrop} open={isLoading}>
        <h2>Loading....</h2>
      </Backdrop>
    </div>
  ) : null;
};

function mapStateToProps(state: {
  common: { loadingIndicator: { isLoading: boolean } };
}) {
  return {
    isLoading: state.common.loadingIndicator.isLoading,
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(LoadingIndicator);
