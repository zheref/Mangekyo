import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { View } from 'react-native';
import { InputV2 } from './InputV2';
import { ButtonV2 } from '../Button/ButtonV2';
import { CardV2 } from '../Card/CardV2';
import { DesignLanguageProvider, useDesignLanguage } from '../../themes/DesignLanguageContext';

const meta = {
  title: 'Components V2/Input',
  component: InputV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    designLanguage: {
      control: 'select',
      options: ['material', 'cupertino', 'metro', undefined],
      description: 'Override global design language',
    },
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="material">
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Story />
        </div>
      </DesignLanguageProvider>
    ),
  ],
} satisfies Meta<typeof InputV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    helperText: 'We will never share your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password must be at least 8 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'Disabled value',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
  },
};

export const Multiline: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    multiline: true,
    numberOfLines: 4,
  },
};

export const SecureTextEntry: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    secureTextEntry: true,
  },
};

export const DesignLanguageComparison: Story = {
  render: () => (
    <View style={{ gap: 20, width: '100%' }}>
      <InputV2
        label="Material Design"
        placeholder="Material input style"
        designLanguage="material"
      />
      <InputV2
        label="Cupertino (iOS)"
        placeholder="iOS input style"
        designLanguage="cupertino"
      />
      <InputV2
        label="Metro (Windows)"
        placeholder="Windows input style"
        designLanguage="metro"
      />
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Compare how inputs look across different design languages. Notice the differences in borders, padding, and styling.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <View style={{ gap: 20, width: '100%' }}>
      <InputV2 label="Default" placeholder="Default state" />
      <InputV2
        label="With Value"
        placeholder="With value"
        value="Sample text"
      />
      <InputV2
        label="With Helper"
        placeholder="With helper text"
        helperText="This is helpful information"
      />
      <InputV2
        label="With Error"
        placeholder="With error"
        error="This field has an error"
      />
      <InputV2
        label="Disabled"
        placeholder="Disabled state"
        disabled
        value="Cannot edit"
      />
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All possible states of the input component.',
      },
    },
  },
};

export const InteractiveForm: Story = {
  render: () => {
    const FormDemo = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [emailError, setEmailError] = useState('');
      const [passwordError, setPasswordError] = useState('');

      const validateEmail = (value: string) => {
        if (!value) {
          setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setEmailError('Email is invalid');
        } else {
          setEmailError('');
        }
      };

      const validatePassword = (value: string) => {
        if (!value) {
          setPasswordError('Password is required');
        } else if (value.length < 8) {
          setPasswordError('Password must be at least 8 characters');
        } else {
          setPasswordError('');
        }
      };

      const handleSubmit = () => {
        validateEmail(email);
        validatePassword(password);
        if (email && password && !emailError && !passwordError) {
          alert('Form submitted successfully!');
        }
      };

      return (
        <CardV2 padding="large" style={{ width: '100%' }}>
          <View style={{ gap: 16 }}>
            <InputV2
              label="Email"
              placeholder="email@example.com"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) validateEmail(text);
              }}
              onBlur={() => validateEmail(email)}
              error={emailError}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <InputV2
              label="Password"
              placeholder="Enter password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) validatePassword(text);
              }}
              onBlur={() => validatePassword(password)}
              error={passwordError}
              secureTextEntry
            />
            <ButtonV2
              title="Submit"
              onPress={handleSubmit}
              variant="primary"
              fullWidth
            />
          </View>
        </CardV2>
      );
    };

    return <FormDemo />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive form with validation showing real-world usage.',
      },
    },
  },
};

export const InteractiveDesignLanguage: Story = {
  render: () => {
    const Demo = () => {
      const { designLanguage, setDesignLanguage } = useDesignLanguage();
      const [value, setValue] = useState('');

      return (
        <View style={{ gap: 20, width: '100%' }}>
          <View style={{ gap: 8 }}>
            <ButtonV2
              title="Material Design"
              onPress={() => setDesignLanguage('material')}
              variant={designLanguage === 'material' ? 'primary' : 'outline'}
              size="small"
            />
            <ButtonV2
              title="Cupertino (iOS)"
              onPress={() => setDesignLanguage('cupertino')}
              variant={designLanguage === 'cupertino' ? 'primary' : 'outline'}
              size="small"
            />
            <ButtonV2
              title="Metro (Windows)"
              onPress={() => setDesignLanguage('metro')}
              variant={designLanguage === 'metro' ? 'primary' : 'outline'}
              size="small"
            />
          </View>

          <CardV2 padding="large">
            <View style={{ gap: 16 }}>
              <InputV2
                label="Text Input"
                placeholder="Type something..."
                value={value}
                onChangeText={setValue}
                helperText={`Active: ${designLanguage}`}
              />
              <InputV2
                label="Email"
                placeholder="email@example.com"
                keyboardType="email-address"
              />
              <InputV2
                label="Password"
                placeholder="Enter password"
                secureTextEntry
              />
            </View>
          </CardV2>
        </View>
      );
    };

    return <Demo />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo showing how inputs adapt when switching design languages.',
      },
    },
  },
};

export const DifferentInputTypes: Story = {
  render: () => (
    <View style={{ gap: 16, width: '100%' }}>
      <InputV2
        label="Text"
        placeholder="Text input"
        keyboardType="default"
      />
      <InputV2
        label="Email"
        placeholder="email@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <InputV2
        label="Phone"
        placeholder="(555) 123-4567"
        keyboardType="phone-pad"
      />
      <InputV2
        label="Number"
        placeholder="123456"
        keyboardType="numeric"
      />
      <InputV2
        label="URL"
        placeholder="https://example.com"
        keyboardType="url"
        autoCapitalize="none"
      />
      <InputV2
        label="Multiline"
        placeholder="Enter multiple lines..."
        multiline
        numberOfLines={3}
      />
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input types for various use cases.',
      },
    },
  },
};
