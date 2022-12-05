import styles from "./style.module.css";
import PropTypes from 'prop-types';

function CustomSelect(props) {
    const {label, options} = props;

    return(
        <div className={styles.container}>
            <label className={label ? styles.label : 'd-none'}>Show: </label>
            <div className="d-flex align-items-center" style={{gap: '8px'}}>
                <select className={styles.select}>
                    {options.map((x) => (
                        <option className="text-dark" key={x.value} value={x.value}>
                            {x.label}
                        </option>
                    ))}
                </select>
                <div className="text-white" style={{fontSize: 12, marginTop: 2}}>&#9660;</div>
            </div>
        </div>
    )
}

CustomSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })).isRequired,
}

CustomSelect.defaultProps = {
    label: undefined
}

export default CustomSelect;
