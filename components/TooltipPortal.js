import ReactDOM from 'react-dom';

const portalRoot = typeof document !== 'undefined' ? document.getElementById('tooltip-portal') : null;

function TooltipPortal({ children }) {
    return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
}

export default TooltipPortal;
