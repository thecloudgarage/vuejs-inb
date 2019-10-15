<template>
   <div>
	<div class="container">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  	Add New Payee
	</button> 
        <h1>Your Payees</h1>
        <PayeeTable/>
	</div>
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered" role="document">
    		<div class="modal-content">
      			<div class="modal-header">
        		<h3 class="modal-title" id="exampleModalLongTitle">Add New Payee</h3>
        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          		<span aria-hidden="true">&times;</span>
        		</button>
      			</div>
      		<div class="modal-body">
        	<PayeeForm/>
      		</div>
    		</div>
  		</div>
     	</div>
     </div>
</template>

<style scoped>
.modal-content {
  background-image: url('https://anhalwaysfortest.s3.amazonaws.com/modalbg.jpg');
}
</style>

<script>
    import PayeeTable from '../../components/payee/PayeeTable.vue';
    import PayeeForm from '../../components/payee/PayeeForm.vue';    
    
    export default {
        components: {
            PayeeTable,
	    PayeeForm,
        },
    };
</script>


<style>
</style>
