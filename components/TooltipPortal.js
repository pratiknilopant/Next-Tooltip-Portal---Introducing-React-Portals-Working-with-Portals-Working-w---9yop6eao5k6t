import ReactDOM from 'react-dom';

const portalRoot = typeof document !== 'undefined' ? document.getElementById('tooltip-portal') : null;

function TooltipPortal({ children }) {
    const portal = (
        <div className="tooltip-portal">
          {children}
        </div>
      );
    
      return ReactDOM.createPortal(portal, portalRoot);
}

export default TooltipPortal;
