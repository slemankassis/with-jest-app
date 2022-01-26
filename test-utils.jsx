import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }) => {
  // const clientSideEmotionCache = createEmotionCache();

  return (
          <div >{children}</div>
  );
};

// jest.mock('react-i18next', () => ({
//   // this mock makes sure any components using the translate hook can use it without a warning being shown
//   useTranslation: () => {
//     return {
//       t: (str) => str,
//       i18n: {
//         changeLanguage: () => new Promise(() => {}),
//       },
//     };
//   },
// }));

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
