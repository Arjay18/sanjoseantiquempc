
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import type { PageProps } from "next";

	const { params } = props;
	const { data: session, status } = useSession();

	import type { PageProps } from "next";
	import dynamic from "next/dynamic";

	const UserDashboardClient = dynamic(() => import("./UserDashboardClient"), { ssr: false });

	export default function Page({ params }: PageProps) {
		return <UserDashboardClient userId={params.userId} />;
	}