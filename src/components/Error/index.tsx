import styles from './styles.module.css';

interface Props {
  error: unknown;
}

const Error = ({ error }: Props) => {
  console.log(error);

  return (
    <div className={[styles.wrapper, 'error-wrapper'].join(' ')}>
      <p>Error! Something when wrong...</p>
    </div>
  );
};

export default Error;
