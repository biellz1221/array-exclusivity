type disponibility = {
	isExclusive: boolean;
	message: string;
};

const isExclusive = (
	originalArray: string[], //
	exclusiveValues: string[] | string,
	trueMessage?: string,
	falseMessage?: string
): disponibility => {
	if (
		typeof exclusiveValues === "string" && //
		originalArray.length === 1 &&
		originalArray[0] === exclusiveValues
	) {
		return {
			isExclusive: true,
			message: trueMessage ? trueMessage : "É exclusivo",
		};
	}

	if (typeof exclusiveValues !== "string" && originalArray.length === exclusiveValues.length) {
		const exclusiveArray = exclusiveValues.map((item: string) => originalArray.find((find) => find === item));

		if (
			exclusiveValues.length === exclusiveArray.length && //
			exclusiveArray.length === originalArray.length &&
			exclusiveArray.every((item, index) => item === exclusiveValues[index])
		) {
			console.log({
				curso: trueMessage,
				exclusiveArray,
				originalArray,
				exclusiveValues,
				ex: exclusiveArray.every((item, index) => item === exclusiveValues[index]),
			});
			return {
				isExclusive: true,
				message: trueMessage ? trueMessage : "É exclusivo",
			};
		}

		return {
			isExclusive: false,
			message: falseMessage ? falseMessage : "Não é exclusivo de nada",
		};
	}

	return {
		isExclusive: false,
		message: falseMessage ? falseMessage : "Não é exclusivo de nada",
	};
};
