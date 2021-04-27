import { Kotti } from '../types'

const isNonEmptyString = (value: unknown): value is string =>
	typeof value === 'string' && value.length > 0

function isValueInEnum<T>(
	value: string,
	enumObject: { [key: string]: T },
): boolean {
	return Object.values(enumObject).includes((value as unknown) as T)
}

const areValidOperations = (
	operations: Kotti.Filter.FilterOperation[],
	filterType: Kotti.Filter.FilterType,
): boolean => {
	switch (filterType) {
		case Kotti.Filter.FilterType.BOOLEAN:
			return operations.every((operation) =>
				isValueInEnum<Kotti.Filter.Operation.Boolean>(
					operation,
					Kotti.Filter.Operation.Boolean,
				),
			)
		case Kotti.Filter.FilterType.DATE_RANGE:
			return operations.every((operation) =>
				isValueInEnum<Kotti.Filter.Operation.DateRange>(
					operation,
					Kotti.Filter.Operation.DateRange,
				),
			)
		case Kotti.Filter.FilterType.MULTI_ENUM:
			return operations.every((operation) =>
				isValueInEnum<Kotti.Filter.Operation.MultiEnum>(
					operation,
					Kotti.Filter.Operation.MultiEnum,
				),
			)
		case Kotti.Filter.FilterType.NUMBER:
			return operations.every((operation) =>
				isValueInEnum<Kotti.Filter.Operation.Number>(
					operation,
					Kotti.Filter.Operation.Number,
				),
			)
		case Kotti.Filter.FilterType.SINGLE_ENUM:
			return operations.every((operation) =>
				isValueInEnum<Kotti.Filter.Operation.SingleEnum>(
					operation,
					Kotti.Filter.Operation.SingleEnum,
				),
			)
		case Kotti.Filter.FilterType.STRING:
			return operations.every((operation) =>
				isValueInEnum<Kotti.Filter.Operation.String>(
					operation,
					Kotti.Filter.Operation.String,
				),
			)
		default:
			return false
	}
}

export const isValidColumn = (
	column: Kotti.Filter.Column,
): column is Kotti.Filter.Column => {
	const isValidKey = isNonEmptyString(column.key)
	const isValidLabel = isNonEmptyString(column.label)
	if (column.type === Kotti.Filter.FilterType.SEARCH)
		return isValidKey && isValidLabel
	return (
		isValidKey &&
		isValidLabel &&
		Array.isArray(column.operations) &&
		column.operations.length > 0 &&
		areValidOperations(column.operations, column.type)
	)
}
