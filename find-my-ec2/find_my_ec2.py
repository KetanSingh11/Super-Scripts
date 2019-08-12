# https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2.html#EC2.Client.describe_instances

##--------------------##
import boto3
import sys
from prettytable import PrettyTable

mytable = PrettyTable()
mytable.field_names = ["Instance-Name", "Instance-Id", "Region", "Status"]


def get_all_instances(session):
	ec2 = session.client('ec2')
	response = ec2.describe_instances()

	#sample structures
	##response['Reservations'][0]['Instances'][0]['InstanceId']
	##response['Reservations'][0]['Instances'][0]['State']['Name']
	##response['Reservations'][1]['Instances'][0]['Tags'][4]['Value']

	row_count = 0
	reservations = response['Reservations']		#list of reservations
	for reservation in reservations:
		instances = reservation['Instances']	#list of
		for instance in instances:
			table_row = []
			
			# get EC2 Name:
			try:
				tags = instance['Tags']
				flag = False
				for item in tags:
					if item['Key'] == 'Name':
						table_row.append(item['Value'])
						flag = True
						
				if not flag:
					table_row.append("> >>missing name-tag<< <")	
			except KeyError:
				table_row.append("> >>missing name-tag<< <")
				

			# get EC2 InstanceId:
			try:
				instance_id = instance['InstanceId']
				table_row.append(instance_id)
			except KeyError:
				table_row.append("> >>missing InstanceId<< <")

			# get region
			region = session.region_name
			table_row.append(region)

			# get EC2 running status
			try:
				running_status = instance['State']['Name']
				table_row.append(running_status)
			except KeyError:
				table_row.append("> >>unknown running-state<< <")

		# print(len(table_row), " : ", table_row)
		row_count = row_count + 1
		mytable.add_row(table_row)
		

	mytable.sortby = "Status"
	print(mytable)
	print("\nTOTAL Rows: %s" %row_count)


if __name__ == "__main__":
	REGIONS_LIST = ["eu-central-1", "us-east-2"]

	print(sys.argv)
	if len(sys.argv) >= 2:
		session = boto3.session.Session(region_name=sys.argv[1], profile_name="default")
	else:
		session = boto3.session.Session(region_name=REGIONS_LIST[1], profile_name="default")

	get_all_instances(session)
