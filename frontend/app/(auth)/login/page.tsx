"use client";

import { EyeFilledIcon } from "@/app/Icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/Icons/EyeSlashFilledIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Spacer } from "@nextui-org/spacer";
import { useState } from "react";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    { key: "admin", label: "Quản trị viên" },
    { key: "user", label: "Người dùng" },
  ];

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col">
      <div className="grid grid-cols-1 gap-4">
        <Input isRequired label="Tên đăng nhập" type="text" />

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

        <Input isDisabled label="Code" type="text" />

        <Select
          isRequired
          label="Đăng nhập với tư cách"
          defaultSelectedKeys={[roles[1].key]}
        >
          {roles.map((role) => (
            <SelectItem key={role.key} value={role.key}>
              {role.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <Spacer y={5} />

      <Button fullWidth color="primary" className="mt-auto">
        Đăng nhập
      </Button>
    </form>
  );
}
