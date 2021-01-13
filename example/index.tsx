import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useFilePicker } from '../src';
import { useEffect } from 'react';
interface TestComponentProps {
  onSuccess?: () => void;
  onLoading?: () => void;
  onError?: () => void;
}

export const TemporaryComponent: React.FC<TestComponentProps> = ({ onSuccess, onError, onLoading }) => {
  const [files, errors, reopen, loading, ref] = useFilePicker({ multiple: false });

  useEffect(() => {
    reopen();
  });
  console.log({ loading });
  if (loading)
    return (
      <div>
        loading
        {onLoading && onLoading()}
      </div>
    );
  if (files.length > 0)
    return (
      <div>
        success
        {onSuccess && onSuccess()}
      </div>
    );
  if (errors.length > 0)
    return (
      <div>
        error
        {onError && onError()}
      </div>
    );
  return (
    <div>
      test
      <input ref={ref} type="file" data-testid="file-picker-input" accept="*" multiple={false} />
    </div>
  );
};

const App = () => {
  // const [filesContent, errors, openFileSelector, loading] = useFilePicker({
  //   multiple: true,
  //   // accept: '.ics,.pdf',
  //   accept: ['.json', '.pdf'],
  // });

  // if (errors.length) {
  //   return (
  //     <div>
  //       <button onClick={() => openFileSelector()}>Something went wrong, retry! </button>
  //       {errors[0].fileSizeTooSmall && 'File size is too small!'}
  //       {errors[0].fileSizeToolarge && 'File size is too large!'}
  //     </div>
  //   );
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {/* <button onClick={() => openFileSelector()}>Select file </button>
      <br />
      Number of selected files:
      {filesContent.length} */}
      <TemporaryComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
