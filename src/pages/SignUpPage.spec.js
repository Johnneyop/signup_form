import SignUpPage from './SignUpPage.vue';
import { render, screen } from '@testing-library/vue';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Sign Up Page", () => {
    describe("Layout", () => {
        it('has Sign Up Header', () => {
            render(SignUpPage);
            const header = screen.queryByRole('heading', { name: 'Sign Up'});
            expect(header).toBeInTheDocument();
        });
        it("has username input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Username');
            expect(input).toBeInTheDocument();
        });
        it("has email input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('E-mail');
            expect(input).toBeInTheDocument();
        });
        it("has password input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Password');
            expect(input).toBeInTheDocument();
        });
        it("has password type for password input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Password');
            expect(input.type).toBe("password");
        });
        it("has password repeat input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Password Repeat');
            expect(input).toBeInTheDocument();
        });
        it("has password type for password input", () => {
            render(SignUpPage);
            const input = screen.queryByLabelText('Password Repeat');
            expect(input.type).toBe("password");
        });
        it('has Sign Up button', () => {
            render(SignUpPage);
            const button = screen.queryByRole('button', { name: 'Sign Up'});
            expect(button).toBeInTheDocument();
        });
        it('disables the button initially', () => {
            render(SignUpPage);
            const button = screen.queryByRole('button', { name: 'Sign Up'});
            expect(button).toBeDisabled();
        });
    });
    describe('Interaction', () => {
        it("enables the button when the password and password repeat fields have same value", async () => {
            render(SignUpPage);
            const passwordInput = screen.queryByLabelText('Password');
            const passwordRepeatInput = screen.queryByLabelText('Password Repeat');
            await userEvent.type(passwordInput, "Password");
            await userEvent.type(passwordRepeatInput, "Password");
            const button = screen.queryByRole('button', { name: 'Sign Up'});
            expect(button).toBeEnabled();
        });
        it("sends username, email and password to backend after clicking the button", async () => {
            render(SignUpPage);
            const usernameInput = screen.queryByLabelText('Username');
            const emailInput = screen.queryByLabelText('E-mail');
            const passwordInput = screen.queryByLabelText('Password');
            const passwordRepeatInput = screen.queryByLabelText('Password Repeat');
            await userEvent.type(usernameInput, "user1");
            await userEvent.type(emailInput, "user1@mail.com");
            await userEvent.type(passwordInput, "Password");
            await userEvent.type(passwordRepeatInput, "Password");
            const button = screen.queryByRole('button', { name: 'Sign Up'});
            expect(button).toBeEnabled();
        });
    });
});
