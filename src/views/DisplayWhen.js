const Display = ({ when, children }) => {
    return !!when ? <>{children}</> : null;
}
export default Display;