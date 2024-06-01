import { ReactNode } from 'react';

export default function Truncate({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className='grid grid-cols-1'>
			<div className={`truncate ${className}`}>{children}</div>
		</div>
	);
}
