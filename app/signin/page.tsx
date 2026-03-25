import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Field,
} from "@/components/ui/field";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Navbar />

      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1E3A8A]">
              Sign in to your loadlink account
            </h2>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md py-10 px-6">
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Email Address</FieldLabel>
                    {/* <Input /> */}
                    <input type="text" placeholder="Email" />
                  </Field>
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    {/* <Input /> */}
                    <input type="password" placeholder="Email" />
                  </Field>
                  <Field>
                    <Button className="bg-[#1E3A8A]">Signin</Button>
                  </Field>
                </FieldGroup>
              </form>
              <FieldDescription className="text-black">
                Dont have an Account{" "}
                <Link href="/signup" className="text-[#1E3A8A]">
                  {" "}
                  Signup
                </Link>
              </FieldDescription>
            </Card>
          </div>
          {/* Form */}
          {/* Email */}
          {/* Password */}
        </div>
      </div>
    </>
  );
}
