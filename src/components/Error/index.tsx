import styles from './styles.module.css';

interface Props {
  error: unknown;
}

const Error = ({ error }: Props) => {
  console.log(error);

  return (
    <div id="error-wrapper" className={styles.errorWrapper}>
      <p id="error-text" className={styles.errorWrapperText}>
        Error! Something when wrong...
      </p>
    </div>
  );
};

export default Error;
