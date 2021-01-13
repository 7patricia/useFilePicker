import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useFilePicker } from '../src';
interface TestComponentProps {
  onSuccess?: () => void;
  onLoading?: () => void;
  onError?: () => void;
}
export const TemporaryComponent: React.FC<TestComponentProps> = ({ onSuccess, onError, onLoading }) => {
  const [files, errors, reopen, loading, ref] = useFilePicker({ multiple: false });

  // useEffect(() => {
  reopen();
  // }, []);
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

const meta: Meta = {
  title: 'Welcome',
  component: TemporaryComponent,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = args => <div {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
