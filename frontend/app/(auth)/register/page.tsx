"use client";

import { EyeFilledIcon } from "@/app/Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/Icons/EyeSlashFilledIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { useState } from "react";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col">
      <div className="grid grid-cols-1 gap-4">
        <Input isRequired label="Tên đăng nhập" type="text" />

        <Input isRequired label="Email" type="email" />

        <Input
          isRequired
          label="Mật khẩu"
          type={isVisible ? "text" : "password"}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />

        <Input
          isRequired
          label="Xác nhận mật khẩu"
          type={isVisible ? "text" : "password"}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>

      <Spacer y={5} />

      <Button fullWidth color="primary">
        Đăng ký
      </Button>
    </form>
  );
}
