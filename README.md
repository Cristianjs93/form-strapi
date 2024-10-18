# Validation Form 🚀

This project is a form that implements validation on all its fields using regular expressions and a custom hook called `useForm` to manage the form state. The goal of the form is to connect to a custom plugin created in Stripe via an HTTP request, allowing the creation of records in the plugin's database.

## Features

- **Field validation**: All form fields are validated using regular expressions to ensure proper data entry.
- **Custom hook**: The `useForm` hook manages form state and validation.
- **Stripe integration**: The form is designed to connect to a custom Stripe plugin via an HTTP request, creating new records in the plugin's database.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Cristianjs93/validation-form.git
   ```

2. Navigate to the project directory:

   ```bash
   cd validation-form
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

3. Fill out the form and submit it. The form will validate the input fields using regular expressions. If all fields are valid, the data will be sent via an HTTP request to a custom Stripe plugin.

## Environment

Define a `VITE_API_URL` variable in your .env file that points to the plugin's api

## Custom Hook (`useForm`)

The `useForm` hook is used to manage the form state and handle validation logic. It provides the following functionality:

- Manage form inputs and their values.
- Apply validation rules for each field using regular expressions.
- Track and display validation errors for each input.

## Integration with Stripe

This form connects to a custom plugin built in Stripe, allowing for record creation in the plugin's database. The integration is handled through an HTTP request that sends form data securely to Stripe's API.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Any contributions, whether improvements or bug fixes, are welcome!

## License

This project is licensed under the MIT License.
