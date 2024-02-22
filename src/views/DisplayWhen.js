// Component to Hide/Show child component
// based on the boolean evaluation of tht `when` prop
const Display = ({ when, children }) => {
    return !!when ? <>{children}</> : null;
}
export default Display;