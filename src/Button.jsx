// import PropTypes from 'prop-types';
import className from 'classnames';
 
function Button({children,
    primary,
    secondary,
    warning,
    danger,
    success,
    rounded,
    outline, ...rest
}) {

  const classes = className(rest.className,'flex items-center border py-1.5 px-3', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-black bg-black text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    '!bg-white	': outline,
    '!text-blue-500': outline && primary,
    '!text-black': outline && secondary,
    '!text-green-500': outline && success,
    '!text-yellow-500': outline && warning,
    '!text-red-500': outline && danger,

  })
  
  return <button {...rest}   className={classes}>{children}</button>;
  
  Button.propTypes = {

    checkVariationValue: ({primary,secondary, warning,
      danger,
      success})=>{
        // all prop bools must add up to less than 2 , need only 1 selected
        let propCount = Number(!!primary)+Number(!!secondary) + Number(!!warning)
        + Number(!!danger) + Number(!!success);

       if(propCount >1){
        return new 
        Error('only pass only one of the following options: primary,secondary,warning,danger,success.')
       }


    }
  }
}

export default Button