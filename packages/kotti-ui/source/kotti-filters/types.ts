import { Kotti } from '../types'
import { SpecifyRequiredProps } from '../types/utilities'

export namespace KottiFilters {
	export enum ButtonLinkType {
		DANGER = 'danger',
		PRIMARY = 'primary',
	}

	export enum FilterType {
		BOOLEAN = 'BOOLEAN',
		CURRENCY = 'CURRENCY',
		DATE_RANGE = 'DATE_RANGE',
		FLOAT = 'FLOAT',
		INTEGER = 'INTEGER',
		MULTI_ENUM = 'MULTI_ENUM',
		SEARCH = 'SEARCH',
		SINGLE_ENUM = 'SINGLE_ENUM',
		STRING = 'STRING',
	}

	export namespace Operation {
		export enum Boolean {
			EQUAL = 'EQUAL',
			IS_EMPTY = 'IS_EMPTY',
		}

		export enum Currency {
			EQUAL = 'EQUAL',
			GREATER_THAN = 'GREATER_THAN',
			GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
			IS_EMPTY = 'IS_EMPTY',
			LESS_THAN = 'LESS_THAN',
			LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
		}

		export enum DateRange {
			IN_RANGE = 'IN_RANGE',
			IS_EMPTY = 'IS_EMPTY',
		}

		export enum Float {
			EQUAL = 'EQUAL',
			GREATER_THAN = 'GREATER_THAN',
			GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
			IS_EMPTY = 'IS_EMPTY',
			LESS_THAN = 'LESS_THAN',
			LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
		}

		export enum Integer {
			EQUAL = 'EQUAL',
			GREATER_THAN = 'GREATER_THAN',
			GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
			IS_EMPTY = 'IS_EMPTY',
			LESS_THAN = 'LESS_THAN',
			LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
		}

		export enum MultiEnum {
			IS_EMPTY = 'IS_EMPTY',
			ONE_OF = 'ONE_OF', // OR
		}

		export enum Search {
			CONTAINS = 'CONTAINS',
		}

		export enum SingleEnum {
			EQUAL = 'EQUAL',
			IS_EMPTY = 'IS_EMPTY',
		}

		export enum String {
			CONTAINS = 'CONTAINS',
			EQUAL = 'EQUAL',
			IS_EMPTY = 'IS_EMPTY',
		}

		export type Any =
			| Operation.Boolean
			| Operation.Currency
			| Operation.DateRange
			| Operation.Float
			| Operation.Integer
			| Operation.MultiEnum
			| Operation.Search
			| Operation.SingleEnum
			| Operation.String
	}

	export namespace Column {
		export type Common = {
			key: string
			label: string
		}

		export type Boolean<
			OPERATION extends Operation.Boolean = Operation.Boolean,
		> = Common & {
			operations: OPERATION[]
			type: FilterType.BOOLEAN
		}

		export type Currency<
			OPERATION extends Operation.Currency = Operation.Currency,
		> = Common & {
			operations: OPERATION[]
			prefix: Kotti.FieldNumber.Props['prefix']
			step: Kotti.FieldNumber.Props['step']
			type: FilterType.CURRENCY
		}

		export type DateRange<
			OPERATION extends Operation.DateRange = Operation.DateRange,
		> = Common & {
			operations: OPERATION[]
			type: FilterType.DATE_RANGE
		}

		export type Float<OPERATION extends Operation.Float = Operation.Float> =
			Common & {
				operations: OPERATION[]
				step: Kotti.FieldNumber.Props['step']
				type: FilterType.FLOAT
			}

		export type Integer<
			OPERATION extends Operation.Integer = Operation.Integer,
		> = Common & {
			operations: OPERATION[]
			type: FilterType.INTEGER
		}

		export type MultiEnum<
			OPERATION extends Operation.MultiEnum = Operation.MultiEnum,
		> = Common & {
			operations: OPERATION[]
			options: Kotti.FieldMultiSelect.Props['options']
			type: FilterType.MULTI_ENUM
		}

		export type Search = Common & {
			placeholder?: string | null
			type: FilterType.SEARCH
		}

		export type SingleEnum<
			OPERATION extends Operation.SingleEnum = Operation.SingleEnum,
		> = Common & {
			operations: OPERATION[]
			options: Kotti.FieldSingleSelect.Props['options']
			type: FilterType.SINGLE_ENUM
		}

		export type String<OPERATION extends Operation.String = Operation.String> =
			Common & {
				operations: OPERATION[]
				type: FilterType.STRING
			}

		export type Any =
			| Column.Boolean
			| Column.Currency
			| Column.DateRange
			| Column.Float
			| Column.Integer
			| Column.MultiEnum
			| Column.Search
			| Column.SingleEnum
			| Column.String
	}

	export type FilterValue =
		| Kotti.FieldDateRange.Value
		| Kotti.FieldMultiSelect.Value
		| Kotti.FieldNumber.Value
		| Kotti.FieldSingleSelect.Value
		| Kotti.FieldText.Value
		| Kotti.FieldToggle.Value

	export type InternalFilter = {
		key: Column.Any['key']
		operation: Operation.Any
		value: FilterValue
	}

	export type Filter = SpecifyRequiredProps<
		InternalFilter,
		'key' | 'operation' | 'value'
	>

	export type Value = Filter[]

	export type InternalProps = {
		columns: Column.Any[]
		isLoading: boolean
		value: Value
	}

	export type Props = SpecifyRequiredProps<InternalProps, 'columns' | 'value'>

	export namespace Events {
		export type UpdateColumns = InternalProps['columns']

		export type UpdateValue = InternalProps['value']
	}

	export type Translations = {
		addFilterLabel: string
		andLabel: string
		boolean: Record<Operation.Boolean, string>
		clearAllLabel: string
		currency: Record<Operation.Currency, string>
		dateRange: Record<Operation.DateRange, string>
		disabledLabel: string
		emptyListLabel: string
		enabledLabel: string
		filterLabel: string
		filtersLabel: string
		float: Record<Operation.Float, string>
		integer: Record<Operation.Integer, string>
		multiEnum: Record<Operation.MultiEnum, string>
		searchLabel: string
		singleEnum: Record<Operation.SingleEnum, string>
		string: Record<Operation.String, string>
		unsetLabel: string
		whereLabel: string
	}
}
